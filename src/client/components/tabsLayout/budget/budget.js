import React, {Component, PropTypes} from 'react';
import {DataTable, TableHeader} from 'react-mdl';

export default class Budget extends Component {
    render() {
        return (
            <section id="budgetSection">
                <DataTable id="budgetTable"
                           shadow={0}
                           rows={[
                               {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                               {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                               {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                               {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                               {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                               {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                               {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                               {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                               {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                               {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                               {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                               {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                               {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                               {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                               {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                               {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                               {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                               {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                               {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                               {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                               {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                               {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                               {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                               {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                               {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                               {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                               {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35},
                               {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                               {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                               {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35}
                           ]}
                >
                    <TableHeader name="position">Pozicija</TableHeader>
                    <TableHeader name="description">Opis</TableHeader>
                    <TableHeader name="amount">Iznos</TableHeader>
                </DataTable>
            </section>
        );
    }
}