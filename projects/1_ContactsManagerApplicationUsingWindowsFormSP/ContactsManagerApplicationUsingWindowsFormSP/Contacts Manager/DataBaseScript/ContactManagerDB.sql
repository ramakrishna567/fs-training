USE [master]
GO
/****** Object:  Database [ContactsmanagerDB]    Script Date: 7/11/2016 10:01:13 AM ******/
CREATE DATABASE [ContactsmanagerDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Contactsmanager', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\Contactsmanager.mdf' , SIZE = 3136KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Contactsmanager_log', FILENAME = N'c:\Program Files\Microsoft SQL Server\MSSQL11.SQLEXPRESS\MSSQL\DATA\Contactsmanager_log.ldf' , SIZE = 832KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [ContactsmanagerDB] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ContactsmanagerDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ContactsmanagerDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [ContactsmanagerDB] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [ContactsmanagerDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ContactsmanagerDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ContactsmanagerDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [ContactsmanagerDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ContactsmanagerDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ContactsmanagerDB] SET  MULTI_USER 
GO
ALTER DATABASE [ContactsmanagerDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ContactsmanagerDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ContactsmanagerDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ContactsmanagerDB] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
USE [ContactsmanagerDB]
GO
/****** Object:  StoredProcedure [dbo].[spAuthenticateUser]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spAuthenticateUser]
(@UserName varchar(50),@Password varchar(50),@PKUserId int output)
as Begin
Select @PKUserId=u.PKUserId from userdetails as u  where u.UserName=@UserName and u.Password=@Password

End

GO
/****** Object:  StoredProcedure [dbo].[spGetAllAddresses]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spGetAllAddresses](@PKAddressId int) as
Begin
if(@PKAddressId=-1)
	Select a.PKAddressId as PKAddressId, c.CountryName as CountryName,c.pkCountryid as FKCountryId ,a.FKStateId as FKStateId, s.StateName as StateName, a.FKUserId as FKUserId,a.FirstName as FirstName,a.LastName as LastName,a.EmailId as EmailId,a.PhoneNo as PhoneNo,a.Address1 as Address1,a.Address2 as Address2,a.Street as Street,a.City as City,a.ZipCode as ZipCode,a.IsActive as IsActive
	from Address as a
	join State as s on s.PKStateId = a.FKStateId 
	join Country  as c on c.PKCountryId =s.FKCountryId  
else
	Select a.PKAddressId as PKAddressId, c.CountryName as CountryName,c.pkCountryid as FKCountryId ,a.FKStateId as FKStateId, s.StateName as StateName, a.FKUserId as FKUserId,a.FirstName as FirstName,a.LastName as LastName,a.EmailId as EmailId,a.PhoneNo as PhoneNo,a.Address1 as Address1,a.Address2 as Address2,a.Street as Street,a.City as City,a.ZipCode as ZipCode,a.IsActive as IsActive
	from Address as a
	join State as s on s.PKStateId = a.FKStateId 
	join Country  as c on c.PKCountryId =s.FKCountryId 
	where a.PKAddressId=@PKAddressId
End


GO
/****** Object:  StoredProcedure [dbo].[spGetAllCountries]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc [dbo].[spGetAllCountries] (@PKCountryId int)
as Begin
if @PKCountryId=-1
Select* from Country;
else if @PKCountryId=-2
Select * from Country Where IsActive=1;
else if @PKCountryId=-3
Select * from Country Where IsActive=0;
Else
Select * from Country Where PKCountryId=@PKCountryId;
End
 


GO
/****** Object:  StoredProcedure [dbo].[spGetAllStates]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[spGetAllStates] (@StateId int,@CountryId int =Null)
as Begin
if @StateId=-1
select s.PKStateId as PKStateId,s.FKCountryId as FKCountryId,s.StateName as StateName,S.IsActive as IsActive,c.CountryName as CountryName 
From State s join Country c 
on s.FKCountryId=c.PKCountryId
Where FKCountryID=ISNULL(@CountryId,FKCountryID);
else if @StateId=-2
select s.PKStateId as PKStateId,s.FKCountryId as FKCountryId,s.StateName as StateName,S.IsActive as IsActive,c.CountryName as CountryName 
From State s join Country c 
on s.FKCountryId=c.PKCountryId
Where s.IsActive=1 and FKCountryID=ISNULL(@CountryId,FKCountryID);
else if @StateId=-3
select s.PKStateId as PKStateId,s.FKCountryId as FKCountryId,s.StateName as StateName,S.IsActive as IsActive,c.CountryName as CountryName 
From State s join Country c 
on s.FKCountryId=c.PKCountryId
Where s.IsActive=0 and FKCountryID=ISNULL(@CountryId,FKCountryID);
else
select s.PKStateId as PKStateId,s.FKCountryId as FKCountryId,s.StateName as StateName,S.IsActive as IsActive,c.CountryName as CountryName 
From State s join Country c 
on s.FKCountryId=c.PKCountryId
WHERE PKStateId =@StateId 

End


GO
/****** Object:  StoredProcedure [dbo].[spGetAllUserAddresses]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE Procedure [dbo].[spGetAllUserAddresses](@PKUserId int)
As
Begin
if @PKUserId=-1
select a.PKAddressId as PKAddressId, c.PKCountryId as FKCountryId,a.FKStateId as FKStateId,a.FirstName as Firstname,a.LastName as LastName,a.FKUserId as FKUserId,a.EmailId as EmailId,a.PhoneNo as PhoneNo,a.Street as Street,a.City as City,s.statename as Statename,c.countryname as Countryname,a.ZipCode as ZipCode,a.IsActive as IsActive,a.Address1 as Address1,a.Address2 as Address2
from Address as a
join State as s
on s.pkstateid=a.fkstateid
join country as c
on c.pkcountryid=s.fkcountryid
else
select a.PKAddressId as PKAddressId, c.PKCountryId as FKCountryId,a.FKStateId as FKStateId,a.FirstName as Firstname,a.LastName as LastName,a.FKUserId as FKUserId,a.EmailId as EmailId,a.PhoneNo as PhoneNo,a.Street as Street,a.City as City,s.statename as Statename,c.countryname as Countryname,a.ZipCode as ZipCode,a.IsActive as IsActive,a.Address1 as Address1,a.Address2 as Address2
from Address as a
join State as s
on s.pkstateid=a.fkstateid
join country as c
on c.pkcountryid=s.fkcountryid
Where a.fkuserid=@PKUserId
End

GO
/****** Object:  StoredProcedure [dbo].[spGetAllUsers]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[spGetAllUsers] (@UserId int)
as Begin
if @UserId=-1
Select * from UserDetails;
else if @UserId=-2
Select * from UserDetails Where IsActive=1;
else if @UserId=-3
Select * from UserDetails Where IsActive=0;
else
select * from UserDetails where PKUserId=@UserId;
End


GO
/****** Object:  StoredProcedure [dbo].[spGetFilteredAddressbook]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spGetFilteredAddressbook]
(@PKCountryID int, @PKStateID int, @IsActive bit)
AS
BEGIN
select a.PKAddressId AS PKAddressId,FKStateId, FKCountryId,FirstName,co.CountryName AS CountryName, EmailId,PhoneNo,Street,a.City AS City, StateName,Address1,Address2,a.ZipCode as ZipCode,a.IsActive AS IsActive From Address a JOIN dbo.State s ON s.PKStateId = a.FKStateId JOIN Country co ON s.FKCountryId = co.PKCountryId
Except
(select a.PKAddressId AS PKAddressId,FKStateId, FKCountryId,FirstName,co.CountryName AS CountryName, EmailId,PhoneNo,Street,a.City AS City,StateName,Address1,Address2,a.ZipCode as ZipCode,a.IsActive AS IsActive FROM Address a JOIN dbo.State s ON s.PKStateId = a.FKStateId JOIN Country co ON s.FKCountryId = co.PKCountryId
        WHERE s.FKCountryId != @PKCountryID
        UNION
        select a.PKAddressId AS PKAddressId,FKStateId, FKCountryId,FirstName,co.CountryName AS CountryName, EmailId,PhoneNo,Street,a.City AS City,StateName,Address1,Address2,a.ZipCode as ZipCode,a.IsActive AS IsActive from Address a JOIN dbo.State s ON s.PKStateId = a.FKStateId JOIN Country co ON s.FKCountryId = co.PKCountryId
        WHERE a.FKStateId != @PKStateID
        UNION
        select a.PKAddressId AS PKAddressId,FKStateId, FKCountryId,FirstName,co.CountryName AS CountryName, EmailId,PhoneNo,Street,a.City AS City,StateName,Address1,Address2,a.ZipCode as ZipCode,a.IsActive AS IsActive  FROM Address a JOIN dbo.State s ON s.PKStateId = a.FKStateId JOIN Country co ON s.FKCountryId = co.PKCountryId
        WHERE a.IsActive != @IsActive)
    END


GO
/****** Object:  StoredProcedure [dbo].[spIsStateExist]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[spIsStateExist] (@CountryName varchar(20),@StateName Varchar(20))
as Begin
 select count(*) from Country c inner join state s on c.PKCountryId=s.FKCountryId where c.CountryName=@CountryName and s.StateName=@StateName
End

GO
/****** Object:  StoredProcedure [dbo].[spManageAddress]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spManageAddress](@ActionType tinyint,@PKAddressId int output, @FKStateId int, @FKUserId int, @FirstName varchar(50),@LastName varchar(50),@EmailId varchar(50),@PhoneNo varchar(50),@Address1 varchar(50),@Address2 varchar(50),@Street varchar(50), @City varchar(50), @ZipCode bigint,@IsActive bit )as
if(@ActionType=1)
begin
insert into Address(FKUserId,FKStateId,FirstName,LastName,EmailId,PhoneNo,Address1,Address2,Street,City,ZipCode,IsActive)values(@FKUserId,@FKStateId,@FirstName,@LastName,@EmailId,@PhoneNo,@Address1,@Address2,@Street,@City,@ZipCode,@IsActive)
select @PKAddressId = @@Identity
End
else if(@ActionType = 2)
update Address set FKStateId=@FKStateId,FKUserId=@FKUserId,FirstName=@FirstName,LastName=@LastName,EmailId=@EmailId,PhoneNo=@PhoneNo,Address1=@Address1,Address2=@Address2,Street=@Street,City=@City,ZipCode=@ZipCode,IsActive=@IsActive where PKAddressId=@PKAddressId
else if(@ActionType=3)
delete from Address where PKAddressId=@PKAddressId


GO
/****** Object:  StoredProcedure [dbo].[spManageCountry]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[spManageCountry] (@ActionType int,@PKCountryId int output,@CountryName Varchar(20),@ZipCodeStart int,@ZipCodeEnd int,@IsActive int)
as Begin
if @ActionType=1
Begin
insert into Country(CountryName,ZipCodeStart,ZipCodeEnd,IsActive) values (@CountryName,@ZipCodeStart,@ZipCodeEnd,@IsActive);
Select @PKCountryId=@@IDENTITY;
End
Else if @ActionType=2
begin
Update Country set CountryName=@CountryName,ZipCodeStart=@ZipCodeStart,ZipCodeEnd=@ZipCodeEnd,IsActive=@IsActive where PKCountryId=@PKCountryId
end
Else if @ActionType=3
Delete from Country where PKCountryId=@PKCountryId;
End


GO
/****** Object:  StoredProcedure [dbo].[spManageState]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[spManageState] (@ActionType tinyint,@PKStateId int Output,@FKCountryId int,@StateName Varchar(20),@IsActive Bit)
as begin
if @ActionType=1
begin
insert into State (FKCountryId,StateName,IsActive) Values (@FKCountryId,@StateName,@IsActive);
select @PKStateId=@@IDENTITY;
End
Else if @ActionType=2
Update State set FKCountryId=@FKCountryId,StateName=@StateName,IsActive=@IsActive where PKStateId=@PKStateId;
else if @ActionType=3
Delete from State where PKStateId=@PKStateId;
End



GO
/****** Object:  StoredProcedure [dbo].[spManageUserDetails]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create proc [dbo].[spManageUserDetails](@ActionType tinyint, @PKUserId int output, @UserName varchar(50), @Password varchar(50), @FirstName varchar(50),@LastName varchar(50), @EmailId varchar(50),@PhoneNo varchar(50), @IsActive bit)
as Begin
if (@ActionType=1)
Begin
insert into UserDetails(UserName,Password,FirstName,LastName,EmailId,PhoneNo,IsActive)
values(@UserName,@Password,@FirstName,@LastName,@EmailId,@PhoneNo,@IsActive);
select @PKUserId = @@Identity;
End
else if @ActionType=2
update UserDetails set UserName=@UserName,Password=@Password,FirstName=@FirstName,LastName=@LastName,EmailId=@EmailId,PhoneNo=@PhoneNo,IsActive=@IsActive
where PKUserId=@PKUserId;
else if @ActionType=3
Delete  from UserDetails where PKUserId=@PKUserId;
End


GO
/****** Object:  Table [dbo].[Address]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING OFF
GO
CREATE TABLE [dbo].[Address](
	[PkAddressId] [int] IDENTITY(1,1) NOT NULL,
	[FKStateId] [int] NOT NULL,
	[FKUserId] [int] NOT NULL,
	[FirstName] [varchar](50) NOT NULL,
	[LastName] [varchar](50) NULL,
	[EmailId] [varchar](50) NOT NULL,
	[PhoneNo] [varchar](50) NOT NULL,
	[Address1] [varchar](50) NULL,
	[Address2] [varchar](50) NOT NULL,
	[Street] [varchar](50) NOT NULL,
	[City] [varchar](50) NOT NULL,
	[ZipCode] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK__Address__03684F1D68DEBF99] PRIMARY KEY CLUSTERED 
(
	[PkAddressId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Country]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Country](
	[PKCountryId] [int] IDENTITY(1,1) NOT NULL,
	[CountryName] [varchar](50) NOT NULL,
	[ZipCodeStart] [bigint] NOT NULL,
	[ZipCodeEnd] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Country_1] PRIMARY KEY CLUSTERED 
(
	[PKCountryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[State]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[State](
	[PKStateId] [int] IDENTITY(1,1) NOT NULL,
	[FKCountryId] [int] NOT NULL,
	[StateName] [varchar](20) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK__State__E5E7F3B2588594BB] PRIMARY KEY CLUSTERED 
(
	[PKStateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UserDetails]    Script Date: 7/11/2016 10:01:13 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UserDetails](
	[PKUserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[FirstName] [varchar](50) NOT NULL,
	[LastName] [varchar](50) NULL,
	[EmailId] [varchar](50) NOT NULL,
	[PhoneNo] [varchar](50) NOT NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_UserDetails_1] PRIMARY KEY CLUSTERED 
(
	[PKUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Address] ON 

INSERT [dbo].[Address] ([PkAddressId], [FKStateId], [FKUserId], [FirstName], [LastName], [EmailId], [PhoneNo], [Address1], [Address2], [Street], [City], [ZipCode], [IsActive]) VALUES (1018, 1097, 1029, N'Vamshi', N'Katta', N'kalla@gmail.com', N'9550516675', N'Vizag', N'Vizag', N'Vizag', N'Sdik', 530009, 1)
INSERT [dbo].[Address] ([PkAddressId], [FKStateId], [FKUserId], [FirstName], [LastName], [EmailId], [PhoneNo], [Address1], [Address2], [Street], [City], [ZipCode], [IsActive]) VALUES (1019, 1097, 1029, N'Giri', N'Dhar', N'giri@gmail.com', N'9848022338', N'Ameerpet', N'Ameerpet', N'Hyderabad', N'SR Nagar', 500016, 1)
INSERT [dbo].[Address] ([PkAddressId], [FKStateId], [FKUserId], [FirstName], [LastName], [EmailId], [PhoneNo], [Address1], [Address2], [Street], [City], [ZipCode], [IsActive]) VALUES (1021, 1098, 1030, N'Somu', N'Kumar', N'Somu@gmail.com', N'9848022338', N'Road1-1-3', N'Road1-1-3', N'Nellore', N'Devitemple', 524004, 1)
SET IDENTITY_INSERT [dbo].[Address] OFF
SET IDENTITY_INSERT [dbo].[Country] ON 

INSERT [dbo].[Country] ([PKCountryId], [CountryName], [ZipCodeStart], [ZipCodeEnd], [IsActive]) VALUES (1036, N'India', 50000, 550000, 1)
INSERT [dbo].[Country] ([PKCountryId], [CountryName], [ZipCodeStart], [ZipCodeEnd], [IsActive]) VALUES (1037, N'USA', 1000, 33618, 1)
INSERT [dbo].[Country] ([PKCountryId], [CountryName], [ZipCodeStart], [ZipCodeEnd], [IsActive]) VALUES (1038, N'Srilanka', 100, 22200, 1)
INSERT [dbo].[Country] ([PKCountryId], [CountryName], [ZipCodeStart], [ZipCodeEnd], [IsActive]) VALUES (1039, N'Australia', 33333, 44444, 1)
SET IDENTITY_INSERT [dbo].[Country] OFF
SET IDENTITY_INSERT [dbo].[State] ON 

INSERT [dbo].[State] ([PKStateId], [FKCountryId], [StateName], [IsActive]) VALUES (1097, 1036, N'Telangana', 1)
INSERT [dbo].[State] ([PKStateId], [FKCountryId], [StateName], [IsActive]) VALUES (1098, 1036, N'Andrapradesh', 1)
INSERT [dbo].[State] ([PKStateId], [FKCountryId], [StateName], [IsActive]) VALUES (1099, 1037, N'New York', 1)
INSERT [dbo].[State] ([PKStateId], [FKCountryId], [StateName], [IsActive]) VALUES (1100, 1037, N'California', 1)
INSERT [dbo].[State] ([PKStateId], [FKCountryId], [StateName], [IsActive]) VALUES (1101, 1036, N'Maharastra', 1)
SET IDENTITY_INSERT [dbo].[State] OFF
SET IDENTITY_INSERT [dbo].[UserDetails] ON 

INSERT [dbo].[UserDetails] ([PKUserId], [UserName], [Password], [FirstName], [LastName], [EmailId], [PhoneNo], [IsActive]) VALUES (1029, N'Jock', N'123', N'jockgalliio', N'gallio', N'gallio@gmail.com', N'9848022338', 1)
INSERT [dbo].[UserDetails] ([PKUserId], [UserName], [Password], [FirstName], [LastName], [EmailId], [PhoneNo], [IsActive]) VALUES (1030, N'Rose', N'123', N'Rose', N'Soda', N'Rose@gmail.com', N'9550516675', 1)
SET IDENTITY_INSERT [dbo].[UserDetails] OFF
SET ANSI_PADDING ON

GO
/****** Object:  Index [CountryName]    Script Date: 7/11/2016 10:01:13 AM ******/
ALTER TABLE [dbo].[Country] ADD  CONSTRAINT [CountryName] UNIQUE NONCLUSTERED 
(
	[CountryName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UserName]    Script Date: 7/11/2016 10:01:13 AM ******/
ALTER TABLE [dbo].[UserDetails] ADD  CONSTRAINT [UserName] UNIQUE NONCLUSTERED 
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Address]  WITH CHECK ADD  CONSTRAINT [FK__Address__FKState__5CD6CB2B] FOREIGN KEY([FKStateId])
REFERENCES [dbo].[State] ([PKStateId])
GO
ALTER TABLE [dbo].[Address] CHECK CONSTRAINT [FK__Address__FKState__5CD6CB2B]
GO
USE [master]
GO
ALTER DATABASE [ContactsmanagerDB] SET  READ_WRITE 
GO
