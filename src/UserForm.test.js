import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
    // render the component
    render(<UserForm />);
    // manipulate and component or find an element in it

    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");
    // Assertion - make sure the component is doing correctly
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

});

test("it calls onUserAdd with the form data", () => {
    // Arrange
    const onUserAdd = jest.fn();
    render(<UserForm onUserAdd={onUserAdd} />);
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button");
    // Act
    user.click(nameInput);
    user.type(nameInput, "John Doe");
    user.click(emailInput);
    user.type(emailInput, "JohnDoe@example.com");
    user.click(button);
    // Assert
    expect(onUserAdd).toHaveBeenCalledWith({
        name: "John Doe",
        email: "JohnDoe@example.com",}
    )
});