# Requires brew install imagemagick

webp_file="$1"
filename=$(basename -- "$webp_file")
filename_noext="${filename%.*}"

webp_directory="./docs/assets/"

magick "$webp_file" -resize 1200x1366^ -gravity center \
-extent 1200x1366 "$webp_directory${filename_noext}-crop.webp"
