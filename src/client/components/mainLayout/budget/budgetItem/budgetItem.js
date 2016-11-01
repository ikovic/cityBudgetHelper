import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Textfield} from 'react-mdl';

export default class BudgetItem extends Component {

    render() {
        return (
            <div id="budgetItemWrapper">
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle>Stavka proračuna</CardTitle>
                    <CardText>
                        <Textfield
                            onChange={() => {
                            }}
                            label="Pozicija"
                            floatingLabel
                            style={{width: '100%'}}
                        />
                        <Textfield
                            onChange={() => {
                            }}
                            label="Opis"
                            floatingLabel
                            rows={2}
                            style={{width: '100%'}}
                        />
                        <Textfield
                            onChange={() => {
                            }}
                            pattern="-?[0-9]*(\.[0-9]+)?"
                            error="Unesite ispravan broj!"
                            label="Iznos"
                            floatingLabel
                            style={{width: '100%'}}
                        />
                    </CardText>
                    <CardActions border>
                        <Button colored>OK</Button>
                    </CardActions>
                    <CardMenu >
                        <IconButton name="mode_edit"/>
                    </CardMenu>
                </Card>
            </div>
        );
    }

}