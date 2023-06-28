import React, {useEffect} from 'react';
import SearchBar from '@theme-original/SearchBar';

const debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}

const onSearchInput = debounce((ev) => {
    const targetId = ev?.target?.id
    if (targetId === 'docsearch-input') {
        const plausible = window.plausible
        if (plausible && ev.target.value && ev.target.value !== '') {
            plausible('search', { props: { query: ev.target.value }})
        }
    }
}, 1000)

export default function SearchBarWrapper(props) {
    useEffect(() => {
        window.addEventListener("input", onSearchInput, { capture: false });
        return () => {
            window.removeEventListener("input", onSearchInput, { capture: false });
        };
    }, [onSearchInput]);
  return (
    <>
      <SearchBar {...props} />
    </>
  );
}
