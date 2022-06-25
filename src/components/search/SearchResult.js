import { connect } from "react-redux";

function SearchResult(props){

    const res = props.searchResults.map( (candidate, index) => {
        return (
            <tr key={index}>
                <th>{ candidate.name }</th>
                <th>{ candidate.phone }</th>
                <th>{ candidate.email }</th>
                <th>{ candidate.role }</th>
            </tr>
        )
    })

    return (
        <div>
            <h4> { props.searchResults.length } Result found</h4>

            <table>
                <thead>
                { res }
                </thead>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults
    }
}


export default connect(mapStateToProps) (SearchResult);
