import React, { component } from 'react'
import { fetchUsers } from "../services/fetchUsers"

const SearchPeople = (props) => (
    <nav className="searchBar grey darken-1 right col s4 margin1p">
        <div class="nav-wrapper grey darken-2">
            <form>
                <div class="input-field">
                    <input id="search" type="search" value={props.value} onChange={props.filterUsers} />
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                </div>
            </form>
        </div>
    </nav>
)


export { SearchPeople }
