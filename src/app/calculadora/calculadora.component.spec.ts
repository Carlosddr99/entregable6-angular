import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [FormsModule,ReactiveFormsModule],
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('valor numero al crear' , () =>{
    const comp = new CalculadoraComponent();
    expect(comp.numero1).withContext('al iniciar variable').toBe(0);
    expect(comp.numero2).withContext('al iniciar variable').toBe(0);
    expect(comp.resultado).withContext('al iniciar variable').toBe(0);

    const bannerElement: HTMLElement = fixture.nativeElement;
    const inputs = bannerElement.querySelectorAll('input');
    const resultado = bannerElement.querySelector('h3');
    expect(inputs[0].value).withContext('al iniciar dom').toBe("0");
    expect(inputs[1].value).withContext('al iniciar dom').toBe("0");
    expect(resultado?.textContent).withContext('al iniciar dom').toBe("Resultado: 0");
  })

});
