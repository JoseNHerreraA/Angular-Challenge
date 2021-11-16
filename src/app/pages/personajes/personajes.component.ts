import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comics_services } from 'src/app/services/comics_services';
import { Personajes_services } from 'src/app/services/personajes_services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  order: string | undefined;
  closeResult: string = "";
  nombre_busq: string = "";
  page: number | undefined;
  total_results: number | undefined;
  personajes_info: any;
  comicId: any;
  personajeId: any;
  favoritos: any[] = [];
  selectControl = new FormControl('name');
  name = new FormControl('');

  options = [
    { value: 'name', label: 'Name' },
    { value: 'modified', label: 'Creation Date' },
  ];



  constructor(private personajes_services: Personajes_services,
    private comic_services: Comics_services,
    private modalService: NgbModal) { }

  open(content: any, id: any) {
    debugger;
    let value = id.split("/");
    this.comicId = value[6];
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  onPaginate(pageEvent: PageEvent) {
    debugger;
    this.page = pageEvent.pageIndex + 1;
    this.getPersonajes();
  }

  updateName() {
    debugger;
    this.nombre_busq = this.name.value;
    this.getPersonajes();
  }

  agregar(id: any): void {
    debugger;
    this.comic_services.getComicImage(id).subscribe((resp: any) => {
      debugger;
      if (!this.exist(resp)) {
        this.favoritos.push(resp);
      }
    });
  }

  add(id: any): boolean{
    debugger;
    let aux = true;
    this.comic_services.getComicImage(id).subscribe((resp: any) => {
      aux = !this.exist(resp);
    });
    return aux;
  }


  quitar(id: any): void {
    this.comic_services.getComicImage(id).subscribe((resp: any) => {
      if (this.exist(resp)) {
        let index = this.favoritos.findIndex((x: { path: string; }) => x.path === resp.path);
        this.favoritos.splice(index, 1);
      }
    });
  }

  detalles(content: any, id: any) {
    this.personajeId = id;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  quitarLista(path: any): void {
    let index = this.favoritos.findIndex((x: { path: string; }) => x.path === path);
    this.favoritos.splice(index, 1);
  }


  exist(data: any): boolean {
    let res = false;
    this.favoritos.forEach(x => {
      if (x.path == data.path) {
        res = true;
      }
    });
    return res;
  }




  ngOnInit(): void {
    debugger;
    this.selectControl.valueChanges.subscribe((value: any) => {
      this.order = value;
      this.getPersonajes();
    });
    this.getPersonajes();
  }

  getPersonajes(): void {
    this.personajes_services.getPersonajes(this.order, this.page, this.nombre_busq).subscribe((resp: any) => {
      debugger;
      this.total_results = resp.total;
      this.personajes_info = resp.results;
    });
  }
}
