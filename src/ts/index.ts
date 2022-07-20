import { notesToPlayInOrder } from "./music-to-play";
import { Accidental, BEATS_PER_MINUTE, MusicalNote } from './musical-score';

let count = 0;

function playMusic() {
    const notes: MusicalNote[] = notesToPlayInOrder;

    // TODO Play these notes one after the other at the pitch and rhythm given in each note
    if (count < notes.length) {
        
        const time: number = notes[count].beats * BEATS_PER_MINUTE;
        let audioId: string = notes[count].pitch + notes[count].octave;

        if (notes[count].accidental) {
            audioId += notes[count].accidental;
        }

        const music = document.getElementById(audioId) as HTMLAudioElement;
        
        music.play();
        count++;

        setTimeout(() => {
            music.pause();
            playMusic();
        }, time);

    } else {
        count = 0;
        return;
    }
}

document.getElementById('start-playing')?.addEventListener('click', playMusic);
