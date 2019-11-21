import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApicloudService} from '../services/apicloud.service';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent implements OnInit {

  user: User;
  ok = false;

  constructor(
    private route: ActivatedRoute,
    private apiCloud: ApicloudService
  ) {
    this.apiCloud.getUser(this.route.snapshot.queryParamMap.get('id')).subscribe(
      (resp) => {
        // @ts-ignore
        this.user = resp.body;
        this.ok = true;
      },
      () => {
        console.log('error al obtener el usuario');
      }
    );
  }

  ngOnInit() {
  }
}
