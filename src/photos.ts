import firestickRemote from "./assets/firestick-remote.jpg";

/**
 * Optional full-size images. Drop files into src/assets/photos/ with these names
 * (.jpg, .jpeg, .png or .webp) and they appear on the site automatically:
 *
 *   product – Fire TV Stick + remote close-up (Product overview section, top of page)
 *   home    – lifestyle: family watching at home (banner above "Entertainment made simple")
 */
const found = import.meta.glob<string>("./assets/photos/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

function photo(name: string): string | undefined {
  const key = Object.keys(found).find((k) => k.split("/").pop()?.split(".")[0] === name);
  return key ? found[key] : undefined;
}

export const photos = {
  product: photo("product") ?? firestickRemote,
  home: photo("home"),
};
