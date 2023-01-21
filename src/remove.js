export default function remove() {
  let removeItems = document.querySelectorAll('.remove');
  removeItems.forEach((item) => {
    item.remove();
  });
}
