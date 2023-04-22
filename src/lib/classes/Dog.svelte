<script lang="ts">
    import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<CodeBlock language="ts" code={`class Dog extends Animal {
    constructor(
        public name: string,
        public age: number,
        public breed: string,
        public image: string
    ) {
        super('Dog', name, age, image);
    }

    bark() {
        console.log('Woof!');
        toastStore.trigger(bark);
        const audio = new Audio(barkmp3);
  		audio.play();
    }
}`}></CodeBlock>