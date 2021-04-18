import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerElementComponent } from "./../server-element/server-element.component";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /**
   * Create two new properties for binding data,
   * EventEmitter is use to create to customs event from angular core module.
   * its data type is generic use with and create a constructor to create a new object of `EventEmitter<>()`.
   */
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer() {
    this.serverCreated.emit( {
      serverName: this.newServerName,
      serverContent: this.newServerContent
    } );
  }

  onAddBlueprint() {
    this.blueprintCreated.emit( {
      serverName: this.newServerName,
      serverContent: this.newServerContent
    } );

  }
}
