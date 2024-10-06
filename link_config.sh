   #!/bin/bash

   DOTFILES_DIR="$HOME/dotfiles"
   CONFIG_DIR="$HOME/.config"

   # List of directories to link
   DIRECTORIES=("alacritty" "htop" "neofetch" "nvim" "hypr" "waybar" "spicetify")

   for dir in "${DIRECTORIES[@]}"; do
       src="$DOTFILES_DIR/$dir"
       dest="$CONFIG_DIR/$dir"

       # Remove existing directory or link if it exists
       if [ -e "$dest" ] || [ -L "$dest" ]; then
           rm -rf "$dest"
       fi

       # Create the symbolic link
       ln -s "$src" "$dest"
       echo "Linked $src to $dest"
   done
