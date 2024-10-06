#!/bin/bash

# Function to get the Spotify window ID
get_app_id() {
	hyprctl --instance 0 clients | grep -A 5 -B 5 "$1" | grep pid | awk '{print $2}'
}

# Function to get the current workspace of a window
get_window_workspace() {
  hyprctl --instance 0 clients | grep -B 5 "$1" | grep workspace | awk '{print $2}'
}

# Main script
app_id=$(get_app_id "$1")

if [ -n "$app_id" ]; then
  current_workspace=$(get_window_workspace "$1")

  if [[ "$current_workspace" < "1" ]]; then
      # Move from special workspace to workspace 1
      hyprctl --instance 0 dispatch movetoworkspace 2,pid:$app_id # Not silent because we want to focus it now i guess?
      echo "Moved $1 to workspace 1"
  else
      # Move to special workspace
      hyprctl --instance 0 dispatch movetoworkspacesilent special,pid:$app_id
      echo "Moved $1 to special workspace"
  fi
else
  echo "$1 window not found"
fi
