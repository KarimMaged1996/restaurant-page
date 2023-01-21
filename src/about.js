export default function createAbout() {
  let about = document.createElement('div');
  about.classList.add('about', 'remove');
  let firstChild = document.createElement('div');
  let secondChild = document.createElement('p');
  firstChild.textContent = 'About Us';
  secondChild.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
  suscipit incidunt inventore dolorum, ea et eius commodi beatae
  corporis rerum at iste ab error doloribus quidem doloremque
  perferendis? Tempora doloribus, laudantium labore laborum illo veniam
  sint nam? Laborum veritatis quo ullam porro? Repellat, libero possimus
  ex perferendis modi illum iure repellendus, sed laboriosam sit
  adipisci quae non. Doloremque asperiores a, earum cumque odio
  explicabo. Maxime, qui aliquam? Repellendus similique culpa aliquam
  nesciunt, eaque assumenda expedita ducimus rem qui esse officia?`;

  about.append(firstChild, secondChild);
  return about;
}
