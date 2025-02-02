import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@components/components.module';
import { AnimatorPage } from './animator.page';
// Components
import { AnimatorGuard } from './guards/animator.guard';
import { CameraSelectButtonComponent } from './components/camera-select-button/camera-select-button.component';
import { CaptureButtonComponent } from './components/capture-button/capture-button.component';
import { ClearButtonComponent } from './components/clear-button/clear-button.component';
import { CountdownModalComponent } from './modals/countdown/countdown.modal';
import { FramerateSliderComponent } from './components/framerate-slider/framerate-slider.component';
import { LoadButtonComponent } from './components/load-button/load-button.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { PlayerCanvasComponent } from './components/player-canvas/player-canvas.component';
import { RecordAudioButtonComponent } from './components/record-audio-button/record-audio-button.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { SnapshotCanvasComponent } from './components/snapshot-canvas/snapshot-canvas.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { ThumbnailsComponent } from './components/thumbnails/thumbnails.component';
import { TimerComponent } from './components/timer/timer.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UndoButtonComponent } from './components/undo-button/undo-button.component';
import { VideoComponent } from './components/video/video.component';

const COMPONENTS = [
  CameraSelectButtonComponent,
  CaptureButtonComponent,
  ClearButtonComponent,
  LoadButtonComponent,
  FramerateSliderComponent,
  PlayButtonComponent,
  PlayerCanvasComponent,
  RecordAudioButtonComponent,
  SaveButtonComponent,
  SettingsButtonComponent,
  SnapshotCanvasComponent,
  TabbarComponent,
  TimerComponent,
  ThumbnailComponent,
  ThumbnailsComponent,
  ToggleButtonComponent,
  ToolbarComponent,
  UndoButtonComponent,
  VideoComponent,
];

const GUARDS = [
  AnimatorGuard,
];

const MODALS = [
  CountdownModalComponent
];

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnimatorPage,
        canDeactivate: [AnimatorGuard],
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [...GUARDS],
  declarations: [...COMPONENTS, ...MODALS, AnimatorPage],
  exports: [...COMPONENTS]
})
export class AnimatorPageModule { }
