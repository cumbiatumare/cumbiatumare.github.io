#!/bin/bash

# Requires brew install webp

# Specify the directory where your JPG files are located
jpg_directory="./docs/assets/"

# Specify the directory to store the WebP files 
webp_directory="./docs/assets/"

# Loop through the JPG files and convert them to WebP
for jpg_file in "$jpg_directory"*.jpg; do
    filename=$(basename -- "$jpg_file")
    filename_noext="${filename%.*}"
    webp_file="$webp_directory${filename_noext}.webp"

    # Convert the JPG to WebP using cwebp
    cwebp "$jpg_file" -o "$webp_file"

    echo "Converted: $jpg_file to $webp_file"
done
