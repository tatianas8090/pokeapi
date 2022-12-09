import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public active : boolean = false

  constructor() { }
  ngOnInit(): void{
    const toggleButton:any = document.getElementById("button-menu");
  const navWrapper:any = document.querySelector(".nav");

  toggleButton?.addEventListener("click", () => {
    console.log("funcionando");
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
  });

  navWrapper?.addEventListener("click",  (e: { target: { id: string; }; }) => {
    if (e.target.id === "nav") {
      navWrapper.classList.remove("show");
      toggleButton?.classList.remove("close");
    }
  });
  }
}



