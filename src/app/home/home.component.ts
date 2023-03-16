import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { LoginServiceService } from '../services/login-service.service';
import { ThemeService } from '../themes/theme.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchRes : any;
  moviesList : any;
  totalResults = 0;
  loader = true;
  modalDetails : any;
  searchText:any;
  apierror = false;
  currentUser: any;
  @ViewChild('licenseAlertModal', { static: false }) licenseAlertModal?: ModalDirective;

  constructor(private service : LoginServiceService,
    private themeService : ThemeService,private modalService: NgbModal) { }

  ngOnInit(){
    this.service.currentUser.subscribe(x => {
      this.currentUser = x;
      if (this.currentUser !== null && this.currentUser!==undefined && this.currentUser) {
        this.getMoviesList();

      }
    });
    // this.getAvatar();
  }

  getMoviesList(){
    this.loader = true;
    this.apierror = false;
    this.service.moviesList().subscribe((res : any) => {
      if(res){
      this.moviesList = res;
      this.totalResults = res.count;
      this.loader = false;
      }
    },(error) => {
      this.loader = false;
      this.apierror = true;
      console.log(error);
    })
  }

  getAvatar(){
    this.service.Avatar().subscribe((res : any) => {
      console.log(res);
    },(error) => {
      console.log(error);
    })
  }

  openModal(item,details){
    this.modalDetails = item;
    this.modalService.open(details, { centered: true , ariaLabelledBy: 'modal-basic-title', keyboard: false }).result.then((result) => {
    }, (reason) => {
      // this.profileForm.reset();
    });
  }

  closemodal(){
    this.modalService.dismissAll('Data Saved!');
  }

  hideModal(){
    this.modalService.dismissAll('Data Saved!');
  }
	open(content,details) {
		this.modalService.open(details, { ariaLabelledBy: 'modal-basic-title' }
		);
	}


  
}
