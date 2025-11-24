import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlayer } from './single-player';

describe('SinglePlayer', () => {
  let component: SinglePlayer;
  let fixture: ComponentFixture<SinglePlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
