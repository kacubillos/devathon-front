export const CreateView = () => {
  return (
    <>
      <div className="flex flex-col p-4">
        <h1>New User</h1>
        <div>
          <input type="radio" name="user_type" value="admin" id="admin" />
        </div>
      </div>
    </>
  );
};
