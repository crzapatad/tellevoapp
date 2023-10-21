import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
//import { collectionData } from 'rxfire/firestore';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private firestore: Firestore) { }

    getUser() {
        const notesRef = collection(this.firestore, 'user');
        return collectionData(notesRef);
    }
    
}