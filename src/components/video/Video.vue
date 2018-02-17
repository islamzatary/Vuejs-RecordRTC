
<template src="./Video.html"></template>

<script>
import {Api} from '@/utilities/api'
let RecordRTC = require('recordrtc');

export default {
    name: 'Video',
    props: [''],
    data: function () {
        return {
            poster: "",
            videoModel:""
        }
    },
    methods: {
        successCallback(stream) {
            var options = {
            mimeType: 'video/webm\;codecs=vp9', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 128000,
            timeSlice:2000,
            bitsPerSecond: 128000 // if this line is provided, skip above two
            };
            this.stream = stream;
            this.recordRTC = RecordRTC(stream, options);
            this.recordRTC.startRecording();
            let video = this.$refs.video;
            video.src = window.URL.createObjectURL(stream);
            //this.toggleControls();
        },
        errorCallback() {
            //handle error here
        },
        processVideo(audioVideoWebMURL) {
            let video = this.$refs.video;
            let recordRTC = this.recordRTC;
            video.src = audioVideoWebMURL;
            //this.toggleControls();
            var recordedBlob = recordRTC.getBlob();
            recordRTC.getDataURL(function (dataURL) { });
        },
        startRecording(video="video") {
            this.poster="";
            let mediaConstraints = {
            video: {
                mandatory: {
                minWidth: 700,
                minHeight: 720
                }
            }, audio: true
            };
            navigator.mediaDevices
            .getUserMedia(mediaConstraints)
            .then(this.successCallback.bind(this), this.errorCallback.bind(this));
            },
            stopRecording(video="video") {
                this.poster="";
                let recordRTC = this.recordRTC;
                recordRTC.stopRecording(this.processVideo.bind(this));
                let stream = this.stream;
                stream.getAudioTracks().forEach(track => track.stop());
                stream.getVideoTracks().forEach(track => track.stop());
                
            },
            download(video="video") {
                this.recordRTC.save('video.webm');
            }
    },
    computed: {
    },
    mounted: function () {
       let video = this.$refs.video;
       video.muted = false;
       video.controls = true;
       video.autoplay = false;
    },
	created : function(){
	}
}
</script>

<style scoped>
.video {
  box-shadow: 1px 6px 10px 2px rgba(35, 35, 35, 0.62);
  height: 400px;
  max-height: 800px;
}
</style>
