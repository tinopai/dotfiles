#!/bin/bash

DOTFILES_DIR="$HOME/dotfiles"
CONFIG_DIR="$HOME/.config"

# List of directories to link in ~/.config
DIRECTORIES=("alacritty" "htop" "neofetch" "nvim" "hypr" "waybar" "spicetify")

# List of files to link directly in home directory
FILES=(".zshrc" ".tmux.conf" ".tmux.conf.local")

# Function to create a symbolic link
create_link() {
    local src="$1"
    local dest="$2"

    # Remove existing file, directory, or link if it exists
    if [ -e "$dest" ] || [ -L "$dest" ]; then
        rm -rf "$dest"
    fi

    # Create the symbolic link
    ln -s "$src" "$dest"
    echo "Linked $src to $dest"
}

# Link directories in ~/.config
for dir in "${DIRECTORIES[@]}"; do
    src="$DOTFILES_DIR/$dir"
    dest="$CONFIG_DIR/$dir"
    create_link "$src" "$dest"
done

# Link individual files in home directory
for file in "${FILES[@]}"; do
    src="$DOTFILES_DIR/$file"
    dest="$HOME/$file"
    create_link "$src" "$dest"
done


### Claude is awesome
