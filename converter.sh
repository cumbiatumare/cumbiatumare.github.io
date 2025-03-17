#!/bin/bash

# Requires brew install webp

convert_to_webp() {
    local input_directory="$1"
    local file_extension="$2"

    echo "----------------------------------------------------------------"
    echo "Converting all $file_extension files in $input_directory to webp..."

    for file in "$input_directory"*."$file_extension"; do
        [ -e "$file" ] || continue  # Skip if no files match the pattern
        filename=$(basename -- "$file")
        filename_noext="${filename%.*}"
        webp_file="$input_directory${filename_noext}.webp"

        # Convert the file to WebP using cwebp
        cwebp "$file" -o "$webp_file"

        echo "Converted: $file to $webp_file"
    done
}

assets_directory="./docs/assets/"

convert_to_webp "$assets_directory" "jpg"
convert_to_webp "$assets_directory" "png"