import React from 'react';
import {useHistory, withRouter} from "react-router";
import {Add} from "@material-ui/icons";
import './EmptyState.scss';

function EmptyState({type, doAction}) {
    const history = useHistory();

    function renderType() {
        switch (type) {
            case 'regExp':
                return (
                    doAction ?
                        <div className="no-data-container" onClick={() => history.push('/regulars')}>
                            <p className="do-action">
                                <Add/>
                                <span>Add a Regular Expense</span>
                            </p>
                        </div>
                        :
                        <div className="no-data-container">
                            <p className="no-action">
                                <span>Nothing here</span>
                            </p>
                        </div>
                );
            case 'latExp':
                return (
                    doAction ?
                        ''
                        :
                        <div className="no-data-container">
                            <p className="no-action">
                                <span>Nothing here</span>
                            </p>
                        </div>
                );
            default:
                break;
        }
    }

    return (
        <>
            {renderType()}
        </>
    );
}

export default withRouter(EmptyState);