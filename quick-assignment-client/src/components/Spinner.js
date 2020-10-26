import '../style/Spinner.css';

const Spinner = () => {
    return (
        <section className="loading-spinner">
            <div className="spinner-border text-primary spinner-config" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </section>
    )
}
export default Spinner;