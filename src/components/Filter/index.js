import s from "./Filter.module.css";


const Filter = ({ filter, onFilterInput }) => {
    return (
        <>
            <form>
                <label> Find contacts by name
                    <input type="text"
                        className={s.inputText}
                        name="filter"
                        value={filter}
                        onChange={onFilterInput} />
                </label>
            </form>
        </>
    )
}

export default Filter