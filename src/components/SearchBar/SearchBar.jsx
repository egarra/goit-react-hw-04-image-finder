import {
  SearchHeader,
  SearchForm,
  SearchFormBtn,
  SearchBtnLabel,
  SearchFormInput,
} from './SearchBar.styled';

export const SearchBar = ({ handleSubmit, query }) => {
  return (
    <SearchHeader>
      <SearchForm
        onSubmit={e => {
          e.preventDefault();

          if (query === e.target.elements.query.value) {
            return;
          }
          handleSubmit(e);
        }}
      >
        <SearchFormBtn type="submit">
          <SearchBtnLabel>Search</SearchBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchHeader>
  );
};
