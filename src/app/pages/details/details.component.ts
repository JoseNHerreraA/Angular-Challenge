import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Personajes_services } from 'src/app/services/personajes_services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() id!: string;
  personaje: any;
  closeResult: string | undefined;
  endpoint: any;
  title: string | undefined;

  constructor(private personajes_services: Personajes_services,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    debugger;
    this.personajes_services.getPersonaje(this.id).subscribe((resp: any) => {
      debugger;
      this.personaje = resp;
    });
  }

  detalles(detail: any, endpoint: any): void {
    debugger;
    this.endpoint = endpoint;
    let value = endpoint.split("/");
    this.title = value[7];
    this.modalService.open(detail, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

}
