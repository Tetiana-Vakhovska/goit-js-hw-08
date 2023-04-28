// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import "simplelightbox/dist/simple-lightbox.min.css"
const galleryBox=document.querySelector('gallery');

(function  () {
 const markUp=galleryItems.map(( {preview, original,description})=>
 `<li class ="gallery_item">
 <a class="gallery_link"  href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
      </li>`) .join('');
galleryBox.insertAdjacentHTML('beforeend', markUp);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPotion:'bottom',
  captiondelay: 250,
  
});
  })()
  



  
