using Proff;

namespace ProffTests
{
    public class ProffTests
    {
        ProffGame game = new ProffGame();

        [Fact]
        public void should_welcome_user()
        {
            Assert.Equal($"Welcome to {game.NameProgram()}", game.WelcomeUser());
        }


    }
}