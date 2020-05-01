import { GenericCollection } from '../genericCollection';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { FirebaseDbModule } from '../firebase-db.module';

@Injectable({
    providedIn: FirebaseDbModule
})
export class AdminProductCollection<AdminProduct> extends GenericCollection<AdminProduct>{
    constructor(protected firestore: AngularFirestore) {
        super(firestore);
        this.setCollectionName('adminProducts');
    }
}