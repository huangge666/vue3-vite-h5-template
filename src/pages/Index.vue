<template>
  <div class="page">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup name="Index">
import * as faceapi from 'face-api.js'
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
/**
 * 路由对象
 */
const route = useRoute()
/**
 * 路由实例
 */
const router = useRouter()
//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */
const state = reactive({
  video: null,
  canvas: null,
  track: null,
  ctx: null
})
const canvasRef = ref(null)

const draw = () => {
  state.ctx.drawImage(state.video, 0, 0, state.canvas.width, state.canvas.height)
  detectFace()
  requestAnimationFrame(draw)
}

const detectFace = async () => {
  const detections = await faceapi.detectAllFaces(state.canvas, new faceapi.TinyFaceDetectorOptions())
  if (detections.length > 0) {
    // 有人脸
    console.log('detectFace')
  } else {
    // 没有人脸
    console.log('没有人脸')
  }
}

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
  state.video = document.createElement('video')
  state.canvas = canvasRef.value
  state.ctx = state.canvas.getContext('2d')
  console.log(navigator.mediaDevices, 'navigator.mediaDevices')
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false
    })
    .then((stream) => {
      console.log('进入吗？？？？？？')
      state.video.srcObject = stream
      state.video.play()
      state.canvas.width = state.video.videoWidth
      state.canvas.height = state.video.videoHeight
      state.track = stream.getTracks()[0]
      requestAnimationFrame(draw)
    })
    .catch((err) => console.error(err))
})

onUnmounted(() => {
  state.track.stop()
})
watchEffect(() => {})
// 使用toRefs解构
// let { } = { ...toRefs(state) }
defineExpose({
  ...toRefs(state)
})
</script>
<style scoped lang="less">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 100%;
  background-color: #f2f2f2;
}

canvas {
  border: 1px solid #ccc;
}
</style>
