import React, {Component, PropTypes} from 'react';
import {DataTable, TableHeader, Grid, Cell, FABButton, Icon} from 'react-mdl';
import BudgetSearch from './budgetSearch/budgetSearch';
import BudgetItem from './budgetItem/budgetItem';

export default class Budget extends Component {


    setTableHeight() {
        var height = window.innerHeight;
        var tableHeight = height - 150;
        document.getElementById('tableWrapper').setAttribute("style", `height:${tableHeight}px`);
    }

    componentDidMount() {
        this.setTableHeight();
        window.addEventListener('resize', this.setTableHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setTableHeight);
    }

    render() {
        return (
            <section id="budgetSection">
                <Grid >
                    <Cell id="tableWrapper" col={8}>
                        <DataTable id="budgetTable"
                                   shadow={0}
                                   rows={[
                                       {
                                           position: 'Acrylic (Transparent)',
                                           description: 'Boja za cestu',
                                           amount: 2.90
                                       },
                                       {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                                       {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                                       {
                                           position: 'Acrylic (Transparent)',
                                           description: 'Boja za cestu',
                                           amount: 2.90
                                       },
                                       {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                                       {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                                       {
                                           position: 'Acrylic (Transparent)',
                                           description: 'Boja za cestu',
                                           amount: 2.90
                                       },
                                       {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                                       {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                                       {
                                           position: 'Acrylic (Transparent)',
                                           description: 'Boja za cestu',
                                           amount: 2.90
                                       },
                                       {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                                       {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                                       {
                                           position: 'Acrylic (Transparent)',
                                           description: 'Boja za cestu',
                                           amount: 2.90
                                       },
                                       {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                                       {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                                       {
                                           position: 'Acrylic (Transparent)',
                                           description: 'Boja za cestu',
                                           amount: 2.90
                                       },
                                       {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                                       {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                                       {
                                           position: 'Acrylic (Transparent)',
                                           description: 'Boja za cestu',
                                           amount: 2.90
                                       },
                                       {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                                       {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                                       {
                                           position: 'Acrylic (Transparent)',
                                           description: 'Boja za cestu',
                                           amount: 2.90
                                       },
                                       {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                                       {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                                       {
                                           position: 'Acrylic (Transparent)',
                                           description: 'Boja za cestu',
                                           amount: 2.90
                                       },
                                       {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                                       {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                                       {
                                           position: 'Acrylic (Transparent)',
                                           description: 'Boja za cestu',
                                           amount: 2.90
                                       },
                                       {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                                       {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35}
                                   ]}
                        >
                            <TableHeader name="position">Pozicija</TableHeader>
                            <TableHeader name="description">Opis</TableHeader>
                            <TableHeader numeric name="amount">Iznos</TableHeader>
                        </DataTable>
                    </Cell>
                    <Cell id="budgetTools" col={4}>
                        <BudgetSearch/>
                        <BudgetItem/>
                        <div className="actionWrapper">
                            <FABButton colored ripple>
                                <Icon name="add"/>
                            </FABButton>
                        </div>
                    </Cell>
                </Grid>
            </section>
        );
    }
}