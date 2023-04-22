<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<CodeBlock language="ts" code={`class Birdy extends Animal {
    constructor(
        public name: string,
        public age: number,
        public image: string
    ) {
        super("Pulu",name,age,image)
    }
    //50/50 to get hit by bird poop
    shitOnYou(){
        const random : number = Math.random();
        const alert = Math.round(random) ? "Dodged 💩" : "got hit by 💩"
        const poop: ToastSettings = {
        message: alert}
        toastStore.trigger(poop);
    }
}`}></CodeBlock>