import { useState, useEffect } from "react"
import { API_URL } from "../../../config";
import "./Briefs.css"

function Briefs() {

    const [briefs, setBriefs] = useState([])

    const [formData, setFormData] = useState({

        projectName: "",
        projectType: "",
        timeline: "",
        targetAudience: "",
        status: ""

    })

    const fetchBriefs = async () => {

        try {

            // const response = await fetch("http://localhost:3001/api/briefs")
            const response = await fetch(`${API_URL}/api/briefs`);
            const data = await response.json()
            setBriefs(data)

        } catch (error) {

            console.error("Error fetching briefs:", error)

        }

    }

    useEffect(() => {

        fetchBriefs()

    }, [])

    const handleChange = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value })

    }

    const handleSubmit = async (event) => {

        event.preventDefault()

        try {

            // const response = await fetch("http://localhost:3001/api/briefs", {
            const response = await fetch(`${API_URL}/api/briefs`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)

            })

            if (!response.ok) {

                throw new Error("Failed to submit brief")

            }

            setFormData({

                projectName: "",
                projectType: "",
                timeline: "",
                targetAudience: "",
                status: ""

            })

            fetchBriefs()

        } catch (error) {

            console.error("Error submitting brief:", error)

        }

    }

    return (

        <>

            <section className="briefs-section">

                <h2>Active Briefs</h2>

                {briefs.map((brief) => (

                    <div className="brief-card" key={brief._id}>

                        <p><strong>Project Name:</strong> {brief.projectName}</p>
                        <p><strong>Project Type:</strong> {brief.projectType}</p>
                        <p><strong>Timeline:</strong> {brief.timeline}</p>
                        <p><strong>Brief Status:</strong> {brief.status}</p>

                    </div>

                ))}

            </section>

            <section className="briefs-form-section">

                <h2>Brief Submission</h2>

                <form onSubmit={handleSubmit}>

                    <input

                        type="text"
                        name="projectName"
                        className="briefs-form-input"
                        placeholder="Project Name - Please provide the project name."
                        value={formData.projectName}
                        onChange={handleChange}
                        required
                        
                    />

                    <input

                        type="text"
                        name="projectType"
                        className="briefs-form-input"
                        placeholder="Project Type - Please provide the project type."
                        value={formData.projectType}
                        onChange={handleChange}
                        required

                    />

                    <input

                        type="text"
                        name="timeline"
                        className="briefs-form-input"
                        placeholder="Project Timeline - Please provide the project timeline."
                        value={formData.timeline}
                        onChange={handleChange}
                        required

                    />

                    <textarea

                        name="targetAudience"
                        className="briefs-form-input"
                        placeholder="Target Audience - Who your campaign is for. Demographics."
                        value={formData.targetAudience}
                        onChange={handleChange}
                        required>

                    </textarea>

                    <input

                        type="text"
                        name="status"
                        className="briefs-form-input"
                        placeholder="Project Status - Ex: Not Started, Active, On Hold, Completed, Cancelled."
                        value={formData.status}
                        onChange={handleChange}
                        
                    />

                    <button type="submit" className="briefs-submit-button">Submit Brief</button>

                </form>

            </section>

        </>

    )

}

export default Briefs
