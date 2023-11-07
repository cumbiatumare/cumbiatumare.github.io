# Requires brew install imagemagick

webp_file="$1"
filename=$(basename -- "$webp_file")
filename_noext="${filename%.*}"

webp_directory="./docs/assets/"

convert "$webp_file" -resize 2000x2000^ -gravity center \
-extent 2000x2000 "$webp_directory${filename_noext}-crop.webp"
