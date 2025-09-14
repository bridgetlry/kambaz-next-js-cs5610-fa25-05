export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section. Links to each of the lab assignments. Link to the Kambaz application. Links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="PERCENTAGE">PERCENTAGE</option>
                            <option value="FRACTION">FRACTION</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">Online</option>
                            <option value="INPERSON">In-person</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td>
                        <label>Online Entry Options</label><br />

                        <input type="checkbox" name="check-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-entry" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-entry" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-entry" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-entry" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr>
                <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label> <br />
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-due-date">Due Date</label> <br />
                        <input type="date" id="wd-due-date" name="due-date"
                            value="2024-05-13"
                            min="2024-01-01" max="2025-12-31" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td></td>
                    <td>
                        <label htmlFor="wd-available-from">Available From</label> <br />
                        <input type="date" id="wd-available-from" name="available-from"
                            value="2024-05-06"
                            min="2024-01-01" max="2025-12-31" />
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label> <br />
                        <input type="date" id="wd-available-until" name="available-until"
                            value="2024-05-20"
                            min="2024-01-01" max="2025-12-31" />

                    </td>
                </tr>
            </table>
            <hr />
            <div id="wd-bottom-buttons">
                <button id="wd-cancel">Cancel</button>
                <button id="wd-save">Save</button>

            </div>

        </div>
    );
}
