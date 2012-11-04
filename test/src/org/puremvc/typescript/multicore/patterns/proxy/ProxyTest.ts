///<reference path='../../../../../../../../test/lib/YUITest.d.ts'/>
///<reference path='../../../../../../../../test/lib/puremvc-typescript-multicore-1.0.d.ts'/>

///<reference path='ProxyTestSub.ts'/>

module test
{
	"use strict";

	/**
	 * Test the PureMVC Proxy class.
	 */
	export class ProxyTest
	{
		/**
		 * The name of the test case - if not provided, one is automatically generated by the
		 * YUITest framework.
		 */
		name:string = "PureMVC Proxy class tests";

		/**
		 * Tests if constructing the Proxy also call its super by testing for the existence of its
		 * <code>Notifier</code> superclass facade instance.
		 */
		testConstructorInitialization():void
		{
			// Create a new subclass of Notifier and verify that its facade has well been created.
			var proxyTestSub:ProxyTestSub = new ProxyTestSub();
			proxyTestSub.initializeNotifier( "key" );

			// test assertions
			YUITest.Assert.isTrue
			(
				proxyTestSub.hasFacade(),
				"Expecting proxyTestSub.hasFacade() === true"
			);
		}

		/**
		 * Tests create a new Proxy using the constructor to set the name and data.
		 */
		testConstructor():void
		{
			// Create a new Proxy using the Constructor to set the name and data
			var proxy:puremvc.IProxy = new puremvc.Proxy('colors',['red', 'green', 'blue']);
			var data:string[] = <string[]>/*</>*/ proxy.getData();

			// test assertions
			YUITest.Assert.isNotNull( proxy, "Expecting proxy !== null"	);

			YUITest.Assert.areEqual( 'colors', proxy.getProxyName(), "Expecting proxy.getProxyName() == 'colors'" );
			YUITest.Assert.areEqual	( 3, data.length, "Expecting data.length == 3" );
			YUITest.Assert.areEqual( 'red', data[0], "Expecting data[0] == 'red'" );
			YUITest.Assert.areEqual( 'green', data[1], "Expecting data[1] == 'green'" );
			YUITest.Assert.areEqual( 'blue', data[2], "Expecting data[2] == 'blue'"	);
		}

		/**
		 * Tests getting the name using Proxy class accessor method. Setting can only be done in
		 * constructor.
		 */
		testNameAccessor():void
		{
			// Create a new Proxy and use accessors to set the proxy name
			var proxy:puremvc.IProxy = new puremvc.Proxy('TestProxy');

			// test assertions
			YUITest.Assert.areEqual
			(
				'TestProxy',
				proxy.getProxyName(),
				"Expecting proxy.getProxyName() == 'TestProxy'"
			);
		}

		/**
		 * Tests setting and getting the data using Proxy class accessor
		 * methods.
		 */
		testDataAccessors():void
		{
			// Create a new Proxy and use accessors to set the data
			var proxy:puremvc.IProxy = new puremvc.Proxy('colors');
			proxy.setData(['red', 'green', 'blue']);
			var data:string[] = <string[]>/*</>*/ proxy.getData();

			// test assertions
			YUITest.Assert.areEqual
			(
				3,
				data.length,
				"Expecting data.length == 3"
			);

			YUITest.Assert.areEqual
			(
				'red',
				data[0],
				"Expecting data[0] == 'red'"
			);

			YUITest.Assert.areEqual
			(
				'green',
				data[1],
				"Expecting data[1] == 'green'"
			);

			YUITest.Assert.areEqual
			(
				'blue',
				data[2],
				"Expecting data[2] == 'blue'"
			);
		}
	}
}