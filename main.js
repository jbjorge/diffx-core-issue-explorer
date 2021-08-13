import { createState, setDiffxOptions, setState, watchState } from '@diffx/core';

const countEl = document.querySelector('#counter');
const incButton = document.querySelector('#inc');
const decButton = document.querySelector('#dec');

setDiffxOptions({ devtools: true });

const clickState = createState('click state', { count: 0 });

function renderCount(count) {
	countEl.innerText = `Count: ${count}`;
}

renderCount(0);

const unwatch = watchState(
	() => clickState,
	(newValue) => renderCount(newValue.count)
);

incButton.addEventListener('click', () => {
	setState('increase count', () => clickState.count++);
});

decButton.addEventListener('click', () => {
	setState('decrease count', () => clickState.count--);
});
