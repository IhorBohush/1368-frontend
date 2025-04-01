const craftedAccordionItem = document.querySelector('.crafted__accordion--item').addEventListener('click', craftedFormContainer);
const craftedAccordion = document.querySelector('.crafted__accordion');
const craftedAccordionIcon = document.querySelector('.crafted__accordion--icon');
const craftedAccordionForm = document.querySelector('.crafted__accordion--form');
function craftedFormContainer() {
    craftedAccordionIcon.classList.toggle('active');
    craftedAccordionForm.classList.toggle('active');
    craftedAccordion.classList.toggle('active');
}