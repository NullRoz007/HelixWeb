import { For } from 'solid-js';
import './Reference.css'

export default function Reference() {
    const referenceModules = import.meta.glob('./references/*.jsx', { eager: true });
    const components = Object.values(referenceModules).map(m => m.default);

    return (
        <div>
            <For each={components}>{(ReferenceSection) => 
                <ReferenceSection />
            }</For> 
        </div>
    );
}