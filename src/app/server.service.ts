import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as io from 'socket.io-client';
import { PageService } from './page.service';

@Injectable()
export class ServerService {
  private socket: SocketIOClient.Socket;

  // connect to socket.io
  constructor(private pageService: PageService) {
    this.socket = io();

    // check if signed in; if so, update pages
    this.socket.emit('getUserDetails', userDetails => {
      if(userDetails.email !== undefined) {
        this.pageService.setIsSignedIn(true);
      }
    });

    // separate event handler because it may be called multiple times by server-side requests
    this.socket.on('missionData', missionData => this.missionDataSubject.next(missionData));
    this.socket.on('missionListData', missionListData => this.missionListDataSubject.next(missionListData));
    this.socket.on('messagesData', messagesData => this.missionMessagesSubject.next(messagesData));
  }

  // get user details
  private userDetailsSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  private updateUserDetails() {
    this.socket.emit('getUserDetails', userDetails => this.userDetailsSubject.next(userDetails));
  }
  public getUserDetails() {
    this.updateUserDetails();
    return this.userDetailsSubject;
  }

  // change user detail
  public editUserField(data: any, callback: Function): void {
    this.socket.emit('editUserField', data, callback);
  }

  // get mission details; event handler to update missiondata in constructor
  private missionDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public getMissionData(): BehaviorSubject<any> {
    this.socket.emit('getMissionData');
    return this.missionDataSubject;
  }

  // mission data go to next checkpoint
  public completeCheckpoint(data: any, callback: Function): void {
    this.socket.emit('completeCheckpoint', data, callback);
  }

  // get mission list data; event handler to update missionListData in constructor
  public missionListDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({ onDuty: [], offDuty: [], first: true });
  public getMissionListData(): BehaviorSubject<any> {
    this.socket.emit('getMissionListData');
    return this.missionListDataSubject;
  }

  // send observable for messages
  private missionMessagesSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public getMessages(): BehaviorSubject<any> {
    this.socket.emit('getMessagesData');
    return this.missionMessagesSubject;
  }

  // send message
  public sendMessage(data: any, callback: Function): void {
    this.socket.emit('sendMessage', data, callback);
  }

  // request a ride
  public request(data, callback) {
    this.socket.emit('request', data, callback);
  }

  // volunteer for a ride
  public volunteer(data, callback) {
    this.socket.emit('volunteer', data, callback);
  }

  // duty dates
  // no data input required
  public getDutyDates(callback: Function) {
    this.socket.emit('getDutyDates', callback);
  }

  // sign in
  public signIn(data, callback) {
    this.socket.emit('signIn', data, res => {
      this.updateUserDetails();
      callback(res);
    });
  }

  // sign up
  public signUp(data, callback) {
    this.socket.emit('signUp', data, res => {
      this.updateUserDetails();
      callback(res);
    });
  }

  // sign out
  public signOut(callback) {
    this.socket.emit('signOut', res => {
      this.updateUserDetails();
      callback(res);
    });
  }
}
