<script lang="ts">
        import { CodeBlock } from '@skeletonlabs/skeleton';
</script>


<CodeBlock language="ts" code={`class Cat extends Animal {
    constructor(
        public name: string,
        public age: number,
        public color: string,
        public image: string
    ) {
        super('Cat', name, age, image);
    }

    meow() {
        console.log('Meow!');
        toastStore.trigger(meow);
        const audio = new Audio(meowmp3);
  		audio.play();
    }
}`}></CodeBlock>