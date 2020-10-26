import react from 'react';
import '../style/Spinner.css';

const Spinner = () => {
    return (
        <section class="loading-spinner">
            <div class="spinner-border text-primary spinner-config" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </section>
    )
}
export default Spinner;