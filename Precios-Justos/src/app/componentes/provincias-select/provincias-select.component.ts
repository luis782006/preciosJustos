import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/Model/Provincia';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-provincias-select',
  templateUrl: './provincias-select.component.html',
  styleUrls: ['./provincias-select.component.scss']
})
export class ProvinciasSelectComponent implements OnInit {


  provincias: Provincia[];

  constructor(private provinciaHttp:ProvinciaService) { 
   
  }

  ngOnInit(): void {

    this.provinciaHttp.getProvincia().subscribe((data:any) => {
      this.provincias=data;
    })

    console.log(this.provincias);
    

  }

}
