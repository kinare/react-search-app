import { connect } from "react-redux";
import { useState } from "react";
import { search } from "../../store/actions";

function Searchbar(props) {

    let [term, setTerm] = useState('')

    function handleChange(event) {
        const {value} = event.target
        setTerm(value);
    }

    function handleSubmission(e) {
        e.preventDefault();
        props.search(term);
    }

    return (
        <div>
            <form onSubmit={ handleSubmission }>
                <input type="text" name="term" value={ term } onChange={ handleChange }/>

                <button type="submit">Search</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    search: search
}

export default connect(null, mapDispatchToProps)(Searchbar)
