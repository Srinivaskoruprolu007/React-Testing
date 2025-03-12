import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
    // Arrange
    const users = [
        {name : "jane", email:"jane@jane.com"},
        {name : "srinivas", email:"srinivas@email.com"},
    ];
    // Act
    render(<UserList users={users} />);
    

    // Assert
    expect(rows).toHaveLength(3);
})