import { useState, useEffect } from "react"
import squarePlaceholder from "../../../assets/square.jpg"
import "./Team.css"

function Team() {

    const [members, setMembers] = useState([])
    const [query, setQuery] = useState("")
    const [selectedMember, setSelectedMember] = useState(null)
    const [showInvite, setShowInvite] = useState(false)

    const [formData, setFormData] = useState({

        name: "",
        role: "",
        email: "",
        department: ""

    })

    const fetchMembers = async () => {

        try {

            const response = await fetch("http://localhost:3001/api/teamMembers")
            const data = await response.json()
            setMembers(data)

        } catch (error) {

            console.error("Error fetching team members:", error)

        }

    }

    useEffect(() => {

        fetchMembers()

    }, [])

    const filteredMembers = members.filter((member) =>

        member.name.toLowerCase().includes(query.toLowerCase())

    )

    const handleChange = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value })

    }

    const handleInviteSubmit = async (event) => {

        event.preventDefault()

        try {

            const response = await fetch("http://localhost:3001/api/teamMembers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, status: "Active", image: "square.jpg" })

            })

            if (!response.ok) {

                throw new Error("Failed to invite member")

            }

            setFormData({ name: "", role: "", email: "", department: "" })
            setShowInvite(false)
            fetchMembers()

        } catch (error) {

            console.error("Error inviting member:", error)

        }

    }

    return (

        <>

            <div className="team-title-row">

                <h2 className="team-page-title">Team Directory</h2>
                <button className="invite-member-button" onClick={() => setShowInvite(true)}>Invite Member</button>

            </div>

            <input

                type="search"
                className="team-search-bar"
                placeholder="Search by team member name."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />

            <div className="team-member-container">

                {filteredMembers.length === 0 ? (<p className="no-results">No team member found.</p>) : (

                    filteredMembers.map((member) => (

                        <div className="member-card" key={member._id} onClick={() => setSelectedMember(member)}>

                            <img src={squarePlaceholder} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>

                        </div>

                    ))

                )}

            </div>

            {selectedMember && (

                <div className="profile-modal-container">

                    <div className="profile-container">

                        <button className="profile-close-button" onClick={() => setSelectedMember(null)}>Close</button>

                        <img src={squarePlaceholder} alt={selectedMember.name} />
                        <h2>{selectedMember.name}</h2>
                        <p className="profile-title">{selectedMember.role}</p>

                        <div className="profile-details">

                            <p><span>Email: </span>{selectedMember.email}</p>
                            <p><span>Phone: </span>{selectedMember.phone}</p>
                            <p><span>Department: </span>{selectedMember.department}</p>
                            <p><span>Status: </span>{selectedMember.status}</p>

                        </div>

                    </div>

                </div>

            )}

            {showInvite && (

                <div className="invite-modal-container">

                    <div className="invite-form-container">

                        <button className="invite-close-button" onClick={() => setShowInvite(false)}>Close</button>

                        <form id="invite-form" onSubmit={handleInviteSubmit}>

                            <input type="text" name="name" placeholder="Enter team member's full name" value={formData.name} onChange={handleChange} required />
                            <input type="text" name="role" placeholder="Enter team member's role" value={formData.role} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Enter team member's work email" value={formData.email} onChange={handleChange} required />
                            <input type="text" name="department" placeholder="Enter team member's department" value={formData.department} onChange={handleChange} required />

                            <button type="submit" id="submit-invite-button">Submit Invite</button>

                        </form>

                    </div>

                </div>

            )}

        </>

    )

}

export default Team