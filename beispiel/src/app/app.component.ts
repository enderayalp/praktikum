import {Component} from '@angular/core';


@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  search: string = '';
  private sonuclar: ({ ad: string; pozisyon: string; soyad: string; yas: number } | { ad: string; pozisyon: string; soyad: string; yas: number } | { ad: string; pozisyon: string; soyad: string; yas: number } | { ad: string; pozisyon: string; soyad: string; yas: number })[];
  constructor() {
  }
  personelVerileri = [
    { ad: 'Ali', soyad: 'Yılmaz', yas: 28, pozisyon: 'Mühendis' },
    { ad: 'Ayşe', soyad: 'Kara', yas: 35, pozisyon: 'Muhasebeci' },
    { ad: 'Mehmet', soyad: 'Gül', yas: 42, pozisyon: 'Müdür' },
    { ad: 'Fatma', soyad: 'Kıvanç', yas: 24, pozisyon: 'Stajyer' },
  ];
  ngOnInit(): void {


  }
  aramaYap() {
    // Arama kelimesini küçük harflere çevirin ve boşlukları kaldırın
    const arananKelime = this.search.toLowerCase().trim();

    // Personel verileri dizisinde arama yapın
    this.sonuclar = this.personelVerileri.filter(personel => {
      // Personel adını küçük harflere çevirin ve aranan kelimeyi içerip içermediğini kontrol edin
      const ad = personel.ad.toLowerCase();
      return ad.includes(arananKelime);
    });
  }
}


